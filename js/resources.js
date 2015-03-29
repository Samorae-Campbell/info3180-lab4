game.resources = [
	/**
	 * Graphics.
	 */
	// our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/area01_level_tiles.png"},
	// the main player spritesheet
	{name: "gripe_run_right",     type:"image",	src: "data/img/player_walk_right.png"},
	// the parallax background
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},

	{name: "title_screen",        type:"image",	src: "data/img/title_screen.png"},


	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/wheelie_right.png"},
	// game font
	{name: "32x32_font",          type:"image",	src: "data/img/32x32_font.png"},
	
	/* 
	 * Maps. 
 	 */
	{name: "area01",              type: "tmx",	src: "data/map/area01.tmx"},


	/* 
	 * Background music. 
	 */	
	{name: "bmusic", type: "audio", src: "data/bgm/"},
	
	/* 
	 * Sound effects. 
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
    {name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}

];