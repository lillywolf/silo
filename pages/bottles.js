export default function BottleService () {
    return (
        <div className='bottles mt-40 pb-40 px-10 mx-auto w-full md:w-[850px] md:flex-col'>
            <div className='col w-full md:mx-8 md:w-5/12'>
                <p className='subtitle'>Tequila</p>
                <p><div>Casamigos Blanco</div><div className='price'>$700</div></p>
                <p><div>Casamigos Reposado</div><div className='price'>$700</div></p>
                <p><div>Milagro</div><div className='price'>$500</div></p>
                <p className='subtitle'>Mezcal</p>
                <p><div>Ilegal Mezcal</div><div className='price'>$700</div></p>
                <p><div>Montelobos Mezcal</div><div className='price'>$700</div></p>
                <p className='subtitle'>Vodka</p>
                <p><div>Grey Goose</div><div className='price'>$650</div></p>
                <p><div>Tito’s</div><div className='price'>$500</div></p>
                <p className='subtitle'>Whiskey</p>
                <p><div>Johnny Walker Blue Label</div><div className='price'>$1200</div></p>
                <p><div>Johnny Walker Black Label</div><div className='price'>$800</div></p>
                <p><div>Glenfiddich 12 Year</div><div className='price'>$800</div></p>
                <p><div>Bulleit Bourbon</div><div className='price'>$600</div></p>
                <p><div>Jameson Irish Whiskey</div><div className='price'>$500</div></p>
            </div>
            <div className='col w-full md:mx-8 md:w-5/12 md:align-top'>
                <p className='subtitle'>Gin</p>
                <p><div>Bombay Sapphire</div><div className='price'>$650</div></p>
                <p><div>Hendrick’s</div><div className='price'>$500</div></p>
                <p className='subtitle'>Cognac</p>
                <p><div>Hennessy VS</div><div className='price'>$650</div></p>
                <p className='subtitle'>Rum</p>
                <p><div>Bacardi Silver</div><div className='price'>$500</div></p>
                <p><div>Sailor Jerry</div><div className='price'>$500</div></p>
                <p className='subtitle'>Red Bull</p>
                <p><div>5 cans</div><div className='price'>$25</div></p>
                <p><div>10 cans</div><div className='price'>$50</div></p>
                <p><div>Regular, Sugar Free</div></p>
                <p className='subtitle'>Fiji Water</p>
                <p><div>6 pack</div><div className='price'>$25</div></p>
            </div>
        </div>
    );
}