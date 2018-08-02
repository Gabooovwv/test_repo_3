var ImuscicaEngine = 
{
    // default instrument data
    defaultMonochordData: { description: { type: "Monochord", bodyScale: 1, bridge1On: 0, bridge2On:0, bridge1Ratio: 0.3, bridge2Ratio: 0.6 } },
    defaultSquareMembraneData: { description: { type: "SquareMembrane" } },
    defaultCircleMembraneData: { description: { type: "CircleMembrane" } },
    defaultGuitarData: { description: { type: "Guitar", chord1: 0, chord2: 0, chord3: 0, chord4: 0, chord5: 0, chord6: 0 } },
    defaultXylophoneData: { description: { type: "Xylophone" } },
    
    // variables that used for return values of JS side functions (set by Unity)
    _isMusicStringEnabled: false,
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
    
    setBarNum: function(barNum)
    {
    },
    
    getBarNum: function()
    {
        return 0;
    }
};