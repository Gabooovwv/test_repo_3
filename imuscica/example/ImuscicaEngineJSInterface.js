var ImuscicaEngine = 
{
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