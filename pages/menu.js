export default function Menu() {
    return (
        <div className="menu pt-12 md:pt-20 lg:pt-28 pb-40 px-6 md:px-10 w-full bg-contain bg-[url('/menu_background_780x1990.jpg')] md:bg-auto md:bg-[url('/menu_background_1500x1800.jpg')]">
            <div className="w-full mx-auto md:w-3/4 lg:w-[880px] text-right font-[Andale-Mono]">
                <title>SILO Brooklyn Menu</title>
                <div className='mt-20'>
                    {/* <strong className="title text-3xl">DRINKS</strong>
                    <p className="subtext mb-8">From mixologist Daniel Roman</p> */}

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>SILO Margarita</h3>
                            <div className="price">14</div>
                        </div>
                        <p className="text-xs md:text-sm">Milagro Tequila, Chartreuse, St. Germain, Lime, Spicy Simple Syrup, Club Soda, Basil, Tajín Rim</p>
                        <p>&nbsp;</p>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Mezcal Paloma</h3>
                            <div className="price">14</div>
                        </div>
                        <p className="text-xs md:text-sm">Banhez Mezcal, Grapefruit Soda, Lime, Tajín Rim, Orange Rosemary Simple</p>
                        <p>&nbsp;</p>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Cold Brew Martini</h3>
                            <div className="price">14</div>
                        </div>
                        <p className="text-xs md:text-sm">Spiced Rum, Brazilian Cold  Brew, Mr. Black Coffee Liqueur, Coconut, Vanilla, Cacao Rim</p>
                        <p>&nbsp;</p>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Purple Negroni</h3>
                            <div className="price">14</div>
                        </div>
                        <p className="text-xs md:text-sm">Empress Gin, Lillet Blanc, Luxardo Bianco, Eucalyptus Bitters, Orange</p>
                        <p>&nbsp;</p>
                    </div>
                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>The Brooklyn</h3>
                            <div className="price">14</div>
                        </div>
                        <p className="text-xs md:text-sm">Rittenhouse Rye, Dolin Vermouth, Luxardo Maraschino, Ramazzotti Amaro, Spritz of Velvet Falernum</p>
                        <p>&nbsp;</p>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Mixed Drinks</h3>
                            <div className="price">well* 11</div>
                            <div className="price sub-price">call 13</div>
                            <div className="price sub-price">top shelf 15</div>
                        </div>
                        <p>&nbsp;</p>
                    </div>
                    <h2 className="title text-md sm:text-lg md:text-xl lg:text-2xl">beer</h2>
                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>16 oz Hazy Pale Ale, Pilsner, Seasonal Beers</h3>
                            <div className="price">10</div>
                        </div>
                        <p className="text-xs">Brooklyn-based KCBC Selection</p>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Corona, Stella Artois</h3>
                            <div className="price">8</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Bud, Bud Light, Yuengling</h3>
                            <div className="price">6</div>
                        </div>
                        <p>&nbsp;</p>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Hard Seltzer</h3>
                            <div className="price">8</div>
                        </div>
                        <p>&nbsp;</p>
                        <h2 className="title text-md sm:text-lg md:text-xl lg:text-2xl">wine</h2>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Archer Roose Sauvignon Blanc</h3>
                            <div className="price">12</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Pinot Grigio</h3>
                            <div className="price">12</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Sparkling Rosé</h3>
                            <div className="price">12</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Prosecco</h3>
                            <div className="price">12</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Malbec</h3>
                            <div className="price">12</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Carnivor Cabernet Sauvignon</h3>
                            <div className="price">9</div>
                        </div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Imagery Pinot Noir</h3>
                            <div className="price">9</div>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <h2 className="title text-md sm:text-lg md:text-xl lg:text-2xl">combos</h2>
                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Artist’s Special</h3>
                            <div className="price">10</div>
                        </div>
                        <p className="text-xs md:text-sm">Can of Bud, Bud Light or Yuengling & Well* Shot</p>
                        <p>&nbsp;</p>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>The Savage Detectives</h3>
                            <div className="price">12</div>
                        </div>
                        <p className="text-xs md:text-sm">Can of White Label Mate & Shot of Mezcal</p>
                    </div>
                    <p>&nbsp;</p>
                    <div>
                        <h2 className="title text-md sm:text-lg md:text-xl lg:text-2xl">non-alcoholic</h2>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Brooklyn Brewery Hoppy Amber NA Beer</h3>
                            <div className="price">7</div>
                        </div>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>The Ariel</h3>
                            <div className="price">5</div>
                        </div>
                        <p className="text-xs md:text-sm">Perrier Strawberry Seltzer, Caffeinated Flavor Crystals</p>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>White Label Yerba Mate Soda</h3>
                            <div className="price">5</div>
                        </div>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Red Bull</h3>
                            <div className="price">5</div>
                        </div>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3 >Liquid Death Mountain or Sparkling Water</h3>
                            <div className="price">5</div>
                        </div>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Perrier Strawberry or Lime Flavor</h3>
                            <div className="price">3</div>
                        </div>
                    </div>

                    <div>
                        <div className="name-and-price text-sm sm:text-lg md:text-xl lg:text-2xl">
                            <h3>Assorted Seasonal Hot Teas (Available before 10 pm)</h3>
                            <div className="price">3</div>
                        </div>
                        <p>&nbsp;</p>
                    </div>

                    {/* <h2 className="title text-2xl">Snacks</h2>
                    <div>
                        <div className="name-and-price">
                            <h3 className="text-lg">Pork Rinds</h3>
                            <div className="price">3</div>
                        </div>
                        <p>Korean BBQ, Salt &amp; Pepper</p>
                        <p>&nbsp;</p>
                        <div className="name-and-price">
                            <h3 className="text-lg">Outstanding Puffs - Vegan Protein Puffs</h3>
                            <div className="price">3</div>
                        </div>
                        <p>Ranch, Cheddar, Pizza, Hot &amp; Spicy</p>
                        <p>&nbsp;</p>
                        <div className="name-and-price">
                            <h3 className="text-lg">Crunchy Roasted Edamame Beans</h3>
                            <div className="price">3</div>
                        </div>
                        <p>Sea Salt, Sriracha, Buffalo</p>
                        <p>&nbsp;</p>
                    </div> */}
                    
                    <div>
                        <p className="footer">&nbsp;</p>
                        <h2 className="title text-xs sm:text-sm md:text-md lg:text-lg">happy hour discount of $2 off all drink and combo purchases before 8 pm</h2>
                        <p>&nbsp;</p>
                        <h2 className="title text-sm sm:text-md md:text-lg lg:text-xl">*SILO doesn&apos;t have a well.</h2>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg">We don&apos;t serve anything we aren&apos;t willing to display on our shelves.</p>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg">For those on a budget, we&apos;ve sourced the most reasonably priced liquor that we&apos;d be comfortable serving to a friend at home.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
