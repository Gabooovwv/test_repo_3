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
    
    // variable that used for return value of JS side functions (set by Unity JS plugin)
	_valueSetByUnity: 0,

    // ------------------
    //  public functions
    // ------------------
	setStaticModelsUrl: function(url)
    {
        gameInstance.SendMessage("ImuscicaEngine", "SetStaticModelsUrl", url);
    },
	
    getInstrumentData: function()
    {
        gameInstance.SendMessage("ImuscicaEngine", "QueryInstrumentData");
        return JSON.parse(this._valueSetByUnity);
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
        return this._valueSetByUnity;
    },
	
	setInstrumentLength: function(length)
	{
		gameInstance.SendMessage("ImuscicaEngine", "SetInstrumentLength", length);
	},
	
	setBridgePos: function(index, bridgePos)
	{
		var value = index.toString() + " " + bridgePos.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBridgePos", value);
	},
	
	getBridgePos: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBridgePos", index);
        return this._valueSetByUnity;
	},
	
	bridgeMovedToExtremalPosition: function(index, pos)
	{
		console.log("Monochord bridge" + index + " moved to " + pos);
		Leopoly[Leopoly.applicationVersion].Gui.bridgeMovedToExtremalPosition(index, pos);
	},
	
    setBarNum: function(numBars)
    {
		gameInstance.SendMessage("ImuscicaEngine", "SetBarNum", numBars);
    },
    
    getBarNum: function()
    {
        gameInstance.SendMessage("ImuscicaEngine", "QueryBarNum", index);
        return this._valueSetByUnity;
    },
	
	setBarLength: function(index, length)
    {
		var value = index.toString() + " " + length.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBarLengthWithString", value);
    },

    getBarLength: function(index)
    {
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLength", index);
        return this._valueSetByUnity;
    },

    getBarLengthLimits: function(index)
    {
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLengthLimits", index);
        return this._valueSetByUnity;
    },
	
	getBarColor: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarColor", index);
		return this._valueSetByUnity;
	},
	
	uploadObj: function(url)
	{
		gameInstance.SendMessage("ImuscicaEngine", "UploadObj", url);
	},
	
	uploadCompleted: function(responseText)
	{
		console.log("upload completed: " + responseText);
		Leopoly[Leopoly.applicationVersion].Communication.Athena.uploadCompleted(responseText);
	}
};