import DuitNow from '../assets/duit-now-seeklogo.png';
import Gopay from '../assets/Logo_Gopay.svg';

const mapping = {
  bca: import.meta.env.PUBLIC_BCA,
  gopay: import.meta.env.PUBLIC_GOPAY,
  duidnow: import.meta.env.PUBLIC_DUIDNOW,
} as const;

type GiftType = keyof typeof mapping;

export const WeddingGift = () => {
  function oncopyaccount(type: GiftType) {
    const selected = mapping[type];

    navigator.clipboard.writeText(selected);
    alert('Terimakasih!');
  }

  return (
    <div className='px-4 py-3 rounded-lg w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center auto-cols-fr'>
      <div
        onClick={() => oncopyaccount('bca')}
        className='relative group transition-all gap-6 text-black delay-150 cursor-pointer flex h-fit md:h-72 justify-between rounded-3xl border-4 border-white bg-gradient-to-t from-white/60 to-gray-200 px-5 pt-8 pb-5 shadow-lg drop-shadow-xl flex-col'
      >
        <div className='flex flex-1 items-center justify-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg'
            className='h-20 w-30'
          />
        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
          <h6 className='font-semibold'>Reksa Sarmedi Ma'mur</h6>
          <div className='transition-all delay-150 inline-flex items-center justify-between w-full rounded-full border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 px-4 py-1 group-hover:font-extrabold group-hover:scale-125'>
            <p className='flex-1'>5271562358</p>
            <button>
              <img
                src='https://www.svgrepo.com/show/82319/clipboard-outline.svg'
                className='h-4 w-4'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => oncopyaccount('gopay')}
        className='relative group transition-all gap-6 text-black delay-150 cursor-pointer flex h-fit md:h-72 justify-between rounded-3xl border-4 border-white bg-gradient-to-t from-white/60 to-gray-200 px-5 pt-8 pb-5 shadow-lg drop-shadow-xl flex-col'
      >
        <div className='flex flex-1 items-center justify-center'>
          <img src={Gopay.src} className='h-20 w-16' />
        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
          <h6 className='font-semibold'>Reksa Ma'mur</h6>
          <div className='transition-all delay-150 inline-flex items-center justify-between w-full rounded-full border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 px-4 py-1 group-hover:font-extrabold group-hover:scale-125'>
            <p className='flex-1'>081284232758</p>
            <button>
              <img
                src='https://www.svgrepo.com/show/82319/clipboard-outline.svg'
                className='h-4 w-4'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => oncopyaccount('duidnow')}
        className='relative group transition-all gap-6 text-black delay-150 cursor-pointer flex h-fit md:h-72 justify-between rounded-3xl border-4 border-white bg-gradient-to-t from-white/60 to-gray-200 px-5 pt-8 pb-5 shadow-lg drop-shadow-xl flex-col'
      >
        <div className='flex flex-1 items-center justify-center'>
          <img src={DuitNow.src} className='h-20 w-20' />
        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
          <h6 className='font-semibold'>Mamur Reksa Sarmedi</h6>
          <div className='transition-all delay-150 inline-flex items-center justify-between w-full rounded-full border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 px-4 py-1 group-hover:font-extrabold group-hover:scale-125'>
            <p className='flex-1'>150941214798</p>
            <button>
              <img
                src='https://www.svgrepo.com/show/82319/clipboard-outline.svg'
                className='h-4 w-4'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
