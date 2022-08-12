import loc from '../images/local.png';
import phone from '../images/phone.png';

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-wrapper mx-auto text-center px-1 py-4 font-bold flex flex-col gap-10'>
                <h3 className='my-3 font-bold text-lg md:text-xl'>Kontakt</h3>
                <div className='contact-info flex flex-col md:flex-row items-center justify-around'>
                    <div className='localisation flex items-center  my-3'>
                        <img className='local-icon h-full' src={loc} alt='local-icon' />
                        <span className='text-lg md:text-xl'>
                            Mikołaja Kopernika 21E <br />
                            37-100 Łańcut
                        </span>
                    </div>
                    <div className='phone flex items-center my-3'>
                        <img className='phone-icon h-full' src={phone} alt='local-icon' />
                        <span className='text-lg md:text-xl'>
                            +48 662257522
                        </span>
                    </div>
                    <a className='ask px-3 py-2 my-3 uppercase text-center rounded-md text-sm lg:text-xl' href='https://forms.office.com/r/KLc4n4TYPq' target="_blank" rel='noreferrer'>Zapytaj o wycenę!</a>
                </div>
            </div>
        </div>
    );
};