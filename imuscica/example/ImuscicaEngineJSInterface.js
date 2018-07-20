var ImuscicaEngine = 
{
    // variables that used for return values of JS side functions (set by Unity)
    _isMusicStringEnabled: false,

    // ------------------
    //  public functions
    // ------------------
    getInstrumentData: function()
    {
        return "";
    },

    setInstrumentData: function(instrumentData)
    {
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