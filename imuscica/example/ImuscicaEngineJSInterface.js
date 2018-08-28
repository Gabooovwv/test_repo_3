var ImuscicaEngine = 
{
    // default instrument data
    defaultMonochordData: { description: { type: "Monochord", bodyScale: 1, bridge1On: 0, bridge2On:0, bridge1Ratio: 0.3, bridge2Ratio: 0.6 } },
    defaultSquareMembraneData: { description: { type: "SquareMembrane", scalePointLength: 0.16 } },
    defaultCircleMembraneData: { description: { type: "CircleMembrane", scalePointLength: 0.16 } },
    defaultGuitarData: { description: { type: "Guitar", chord1: 0, chord2: 0, chord3: 0, chord4: 0, chord5: 0, chord6: 0 } },
    defaultXylophoneData: { description: { type: "Xylophone", 
		bodyStartPos: [-0.11, 0, 0], bodyStartRot: [0, 0, 0, 1], bodyStartScale: [1, 1, 1], 
		bodyEndPos: [0.11, 0, 0], bodyEndRot: [0, 0, 0, 1], bodyEndScale: [1, 1, 1], 
		numBars: 5 } },
    
    // variables that used for return values of JS side functions (set by Unity)
    _isMusicStringEnabled: false,
	_numBars: 5,
	_barLength: 0,
	_minBarLength: 0,
	_maxBarLength: 0,
    _instrumentData: "",

    // ------------------
    //  public functions
    // ------------------
    getInstrumentData: function()
    {
        gameInstance.SendMessage("ImuscicaEngine", "QueryInstrumentData");
        return JSON.parse(this._instrumentData);
    },

    setInstrumentData: function(instrumentData)
    {
        gameInstance.SendMessage("ImuscicaEngine", "SetInstrumentData", JSON.stringify(instrumentData));
    },
    
    setStaticModelsUrl: function(url)
    {
        gameInstance.SendMessage("ImuscicaEngine", "SetStaticModelsUrl", url);
    },
    
    enableMusicString: function(index, flag)
    {
        if (flag)
        {
            gameInstance.SendMessage("ImuscicaEngine", "EnableMusicString", index);
        }
        else
        {
            gameInstance.SendMessage("ImuscicaEngine", "DisableMusicString", index);
        }
    },
    
    isMusicStringEnabled: function(index)
    {
        gameInstance.SendMessage("ImuscicaEngine", "QueryMusicStringEnabled", index);
        return this._isMusicStringEnabled;
    },
    
    setBarNum: function(numBars)
    {
		gameInstance.SendMessage("ImuscicaEngine", "SetBarNum", numBars);
    },
    
    getBarNum: function()
    {
        gameInstance.SendMessage("ImuscicaEngine", "QueryBarNum", index);
        return this._numBars;
    },
	
	setBarLength: function(index, length)
    {
		var value = index.toString() + " " + length.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBarLengthWithString", value);
    },

    getBarLength: function(index)
    {
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLength", index);
        return this._barLength;
    },

    getBarLengthLimits: function(index)
    {
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLengthLimits", index);
        return [this._minBarLength, this._maxBarLength];
    }
};