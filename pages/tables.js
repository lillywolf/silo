import Image from 'next/image'

export default function Tables() {
    return (
        <>
            <title>Table Service at SILO</title>
            <div className='tables pt-40 pb-6 px-10 mx-auto w-full md:w-[850px] md:flex-col'>
                <div className='text-2xl text-white col w-full md:mx-8 md:w-10/12'>TABLE SERVICE MENU</div>
                <div className='col w-full md:mx-8 md:w-5/12'>
                    <p className='subtitle'>Tequila</p>
                    <p><span>Volcan De Mi Tierra X.A Tequila</span><span className='price'>$1200</span></p>
                    <p><div>Don Julio 1942 Tequila</div><div className='price'>$1000</div></p>
                    <p><span>Clase Azul Tequila Reposado</span><span className='price'>$1000</span></p>
                    <p><div>Casamigos Reposado</div><div className='price'>$700</div></p>
                    <p><div>Casamigos Blanco</div><div className='price'>$600</div></p>
                    <p><div>Milagro</div><div className='price'>$500</div></p>
                    <p className='subtitle'>Mezcal</p>
                    <p><div>Casamigos Mezcal</div><div className='price'>$800</div></p>
                    <p><div>Ilegal Mezcal</div><div className='price'>$600</div></p>
                    <p><div>Montelobos Mezcal</div><div className='price'>$600</div></p>
                    <p className='subtitle'>Vodka</p>
                    <p><div>Grey Goose</div><div className='price'>$650</div></p>
                    <p><div>Tito’s</div><div className='price'>$500</div></p>
                    <p className='subtitle'>Whiskey</p>
                    <p><span>Johnny Walker Blue Label</span><span className='price'>$1200</span></p>
                    <p><span>Johnny Walker Black Label</span><span className='price'>$800</span></p>
                    <p><div>Glenfiddich 12 Year</div><div className='price'>$800</div></p>
                    <p><div>Bulleit Bourbon</div><div className='price'>$600</div></p>
                    <p><div>Jameson Irish Whiskey</div><div className='price'>$500</div></p>
                </div>
                <div className='col w-full md:mx-8 md:w-5/12 md:align-top'>
                    <p className='subtitle'>Champagne</p>
                    <p><div>Veuve Clicquot Brut</div><div className='price'>$375</div></p>
                    <p><div>Veuve Clicquot Brut Rose</div><div className='price'>$375</div></p>
                    <p><div>Dom Perignon Brut</div><div className='price'>$800</div></p>
                    <p className='subtitle'>Cognac</p>
                    <p><div>Hennessy VSOP</div><div className='price'>$800</div></p>
                    <p><div>Hennessy VS</div><div className='price'>$650</div></p>
                    <p><span>Remy Martin Mix Tape - Limited Edition VSOP</span><span className='price'>$650</span></p>
                    <p className='subtitle'>Gin</p>
                    <p><div>Bombay Sapphire</div><div className='price'>$650</div></p>
                    <p><div>Hendrick’s</div><div className='price'>$500</div></p>
                    <p className='subtitle'>Rum</p>
                    <p><div>Bacardi Silver</div><div className='price'>$500</div></p>
                    <p><div>Sailor Jerry</div><div className='price'>$500</div></p>
                    <p className='subtitle'>Red Bull</p>
                    <p><div>5 cans</div><div className='price'>$25</div></p>
                    <p><div>10 cans</div><div className='price'>$50</div></p>
                    <p><div>Regular, Sugar Free, Tropical</div></p>
                    <p className='subtitle'>Liquid Death Mountain Water</p>
                    <p><div>4 pack</div><div className='price'>$20</div></p>
                    <p><div>Still or Sparkling</div></p>
                </div>
                <div className='col w-full py-20 md:mx-8 md:w-10/12'>
                    <p>Table reservations include tickets to the event, complimentary coat check, mixers, and expedited entry.</p>
                    <p className='mt-2'>There is a minimum spend based on your party size.</p>
                    <p className='mt-2'>Contact <a href="mailto:tables@silobrooklyn.com" className='underline'>tables@silobrooklyn.com</a> for details.</p>
                </div>
            </div>
            <div className='text-2xl text-white col w-full md:mx-8 md:w-10/12 text-center'>TABLE SECTION PHOTOS</div>
            <div className='flex gap-6 tables-photos pb-36'>
                    <div className='item basis-1/3'>
                        <div className='mt-3'>
                        <Image
                            src="/tables1.jpg"
                            width="50%"
                            height="33%"
                            layout="responsive"
                            alt="Photo of the main showroom with tables"
                        />
                        </div>
                        <div className='pt-6'>
                        <Image
                            src="/tables2.jpg"
                            width="50%"
                            height="33%"
                            layout="responsive"
                            alt="Photo of VIP tables on the right side of the show room"
                        />
                        </div>
                    </div>
                    <div className='item basis-1/3'>
                        <div>
                        <Image
                            src="/tables3.jpg"
                            width="50%"
                            height="33%"
                            layout="responsive"
                            alt="Photo of VIP tables in the show room"
                        />
                        </div>
                        <div className='pt-6'>
                        <Image
                            src="/tables4.jpg"
                            width="50%"
                            height="33%"
                            layout="responsive"
                            alt="Photo of VIP tables in the show room"
                        />
                        </div>
                    </div>
                </div>
        </>
    );
}
