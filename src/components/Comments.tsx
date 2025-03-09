import {
  Suspense,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { supabase } from '../data/db';

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const fetchComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('id', { ascending: false });
  if (error) console.error('Error fetching comments:', error.message);
  return data || [];
};

const postComments = async (props: { name: string; comment: string }) => {
  return await supabase
    .from('comments')
    .insert({ name: props.name, comment: props.comment });
};

export const Comments = () => {
  const [comments, setComments] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const debouncedInsert = useCallback(
    debounce(async (props: { name: string; comment: string }) => {
      if (!props) return;
      postComments(props);
      setLoading(false);
    }, 1000),
    []
  );

  const onSubmit = async () => {
    if (!name || !comment) {
      alert('Gak boleh kosong');
    }

    setLoading(true);

    debouncedInsert({ name, comment });

    setName('');
    setComment('');
  };

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchComments();
      setComments(data);
    };
    loadComments();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('comments-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'comments' },
        (payload) => {
          setComments((prevComments) => [payload.new, ...prevComments]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <article className='text-white space-y-10 mt-20'>
      <h1 className='text-xl font-semibold w-full text-center'>
        Tolong berikan <br /> sebuah pesan untuk kita
      </h1>

      <div className='border-b w-full border-white/50'></div>

      {/* Create Comments */}
      <section className='w-full'>
        <div className='w-full space-y-2'>
          <div className='text-end'>
            <label htmlFor='name' className='text-4xl font-parisienne'>
              Dari,
            </label>
            <input
              type='text'
              className='border-b w-40 text-4xl'
              placeholder='Nama'
              onChange={(e) => setName(e.target.value)}
              id='name'
              value={name}
              disabled={loading}
            />
          </div>

          <div className='w-full'>
            <textarea
              id='message'
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className='block px-4 py-3 w-full text-lg text-black bg-white/80 rounded-lg border border-white'
              placeholder='Tuliskan pesan kamu disini...'
              disabled={loading}
            ></textarea>
          </div>

          <div className='text-end'>
            <button
              className='px-4 py-2 cursor-pointer hover:bg-white/10 text-2xl'
              onClick={() => onSubmit()}
              disabled={loading}
            >
              {loading ? <span>Sedang Mengirim ...</span> : <span>Kirim</span>}
            </button>
          </div>
        </div>
      </section>

      <div className='border-b w-full border-white/50'></div>

      {/* List Comments */}
      <Suspense fallback={<p>Sebentarr...</p>}>
        {comments.length > 1 ? (
          <section className='w-full flex flex-col overflow-auto h-[500px] gap-4'>
            {comments.map((item) => (
              <div
                key={item.id}
                className='flex flex-col gap-4 py-8 px-6 text-black bg-white/70 border border-white/80 rounded-lg'
              >
                <p className='first-letter:uppercase italic text-lg rounded-full w-fit'>
                  {item.comment}
                </p>
                <div className='inline-flex gap-2 items-center'>
                  <h6 className='first-letter:uppercase text-base font-bold space-x-1'>
                    <span className='font-semibold'>—</span>
                    <span>{item.name}</span>
                  </h6>
                </div>
              </div>
            ))}
          </section>
        ) : null}
      </Suspense>
    </article>
  );
};
