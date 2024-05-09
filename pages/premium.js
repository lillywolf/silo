import Image from 'next/image'

export default function Premium() {
    return (
        <>
            <title>SILO Brooklyn Premium Bottle Service Menu</title>
            <div className='tables pt-40 pb-4 px-10 mx-auto w-full md:w-[850px] md:flex-col'>
                <div className='text-2xl text-white col w-full md:mx-8 md:w-10/12'>TABLE SERVICE MENU</div>
                <div className='col w-full md:mx-8 md:w-5/12'>
                    <p className='subtitle'>Premium Spirits:<div className='price'>$600</div></p>
                    <p><span>Casamigos Blanco Tequila</span></p>
                    <p><span>Casamigos Reposado Tequila</span></p>
                    <p><span>Tito’s Vodka</span></p>
                    <p><span>Jameson Irish Whiskey</span></p>
                    <p><span>Hennessy VS Cognac</span></p>
                    <p><span>Remy Martin VSOP Cognac</span></p>
                    <p><span>Veuve Clicquot Yellow Label Brut Champagne</span></p>
                    <p className='subtitle'></p>
                    
                    <p>Ultra Premium Spirits:<div className='price'>$1000</div></p>
                    <p><span>Don Julio 1942 Anejo Tequila</span></p>
                    <p><span>Clase Azul Reposado Tequila</span></p>
                    <p><span>Volcan de Mi Tierra Extra Anejo Tequila</span></p>
                    <p><span>Gray Goose Vodka (1L)</span></p>
                    <p><span>Johnny Walker Black Label Scotch (1L)</span></p>
                    <p><span>Nikka Coffey Grain Japanese Whiskey</span></p>
                    <p><span>Krug Grand Cuvee Champagne</span></p>
                    <p><span>Dom Perignon Champagne</span></p>
                </div>
                <div className='col w-full py-20 md:mx-8 md:w-10/12'>
                    <p>Table reservations include tickets to the event, complimentary coat check, mixers, and expedited entry.</p>
                    <p className='mt-2'>We ask that your party buy at least one bottle per four guests.</p>
                    <p className='mt-2'>Prices above do not include tax and 20% gratuity.</p>
                    <p className='mt-2'>Contact <a href="mailto:tables@silobrooklyn.com" className='underline'>tables@silobrooklyn.com</a> for details.</p>
                </div>
            </div>
            <div className='text-2xl text-white col w-full md:mx-8 md:w-10/12 text-center'>TABLES LAYOUT (Planet Names)</div>
            <div className='w-full mx-auto pt-3 md:pb-16 w-11/12 sm:w-11/12 lg:w-11/12'>
                <div className='flex flex-wrap gap-3'>
                    <div className='item basis-1/4 grow'>
                        <Image
                            src="/silo_tables_layout.jpg"
                            width="100%"
                            height="33%"
                            layout="responsive"
                            alt="Tables Layout"
                        />
                    </div>
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
