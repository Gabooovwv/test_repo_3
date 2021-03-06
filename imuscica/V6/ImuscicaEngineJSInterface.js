var ImuscicaEngine = 
{
	// default instrument data
	defaultMonochordData: { description: { type: "Monochord", 
		bodyScale: 1, 
		bridge1On: 0, bridge2On:0, bridge1Ratio: 0.3, bridge2Ratio: 0.6, 
		tension1Limits: [20, 1500], tension2Limits: [20, 1500], tension1: 94.66, tension2: 94.66 } },
	defaultSquareMembraneData: { description: { type: "SquareMembrane", scalePointLength: 0.16 } },
	defaultCircleMembraneData: { description: { type: "CircleMembrane", scalePointLength: 0.16 } },
	defaultGuitarData: { description: { type: "Guitar", chord1: 1, chord2: 2, chord3: 3, chord4: 4, chord5: 0, chord6: 0 } },
	defaultXylophoneData: { description: { type: "Xylophone", 
		bodyStartPos: [-0.11, 0, 0], bodyStartRot: [0, 0, 0, 1], bodyStartScale: [1, 1, 1], 
		bodyEndPos: [0.11, 0, 0], bodyEndRot: [0, 0, 0, 1], bodyEndScale: [1, 1, 1], 
		numBars: 5 } },
	defaultTrombaMarinaData: { description: { type: "TrombaMarina" } },
    
	// variable that used for return value of JS side functions (set by Unity JS plugin)
	_valueSetByUnity: 0,

	// ------------------
	//  public functions
	// ------------------
	getVersion: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryVersion");
		return this._valueSetByUnity; // array of 3 numbers and a string: [major, minor, patch, commitInfo]
	},
	
	setStaticModelsUrl: function(url)
	{
		gameInstance.SendMessage("ImuscicaEngine", "SetStaticModelsUrl", url);
	},
	
	setBaseMetric: function(metric, decimals)
	{
		var value = metric + " " + decimals;
		gameInstance.SendMessage("ImuscicaEngine", "SetBaseMetricWithString", value);
	},
	
	setMeterRoundDecimals: function(decimals)
	{
		gameInstance.SendMessage("ImuscicaEngine", "SetMeterRoundDecimals", decimals);
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
	
	setCameraData: function(cameraData, cameraAnimTimeInSeconds)
	{
		if (typeof cameraAnimTimeInSeconds === 'undefined')
		{
			cameraAnimTimeInSeconds = 0.5;
		}
		
		var value = "";
		for (var i = 0; i < 8; ++i)
		{
			value += cameraData[i].toString() + " ";
		}
		value += cameraAnimTimeInSeconds.toString();
		
		gameInstance.SendMessage("ImuscicaEngine", "SetCameraDataWithString", value);
	},
	
	getCameraData: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryCameraData");
		return this._valueSetByUnity;	// array of 8 numbers: [px, py, pz, rx, ry, rz, rw, d]
	},
	
	resetCamera: function(cameraAnimTimeInSeconds)
	{
		if (typeof cameraAnimTimeInSeconds === 'undefined')
		{
			cameraAnimTimeInSeconds = 0.5;
		}
		gameInstance.SendMessage("ImuscicaEngine", "ResetCamera", cameraAnimTimeInSeconds);
	},

	getGLTF: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryGLTF");
		return JSON.parse(this._valueSetByUnity);
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
		return this._valueSetByUnity;	// bool
	},

	setTensionLimits: function(index, minTension, maxTension)
	{
		var value = index.toString() + " " + minTension.toString() + " " + maxTension.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetTensionLimitsWithString", value);
	},

	getTensionLimits: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryTensionLimits", index);
		return this._valueSetByUnity;	// array of 2 numbers: [min, max]
	},

	setTension: function(index, tension)
	{
		var value = index.toString() + " " + tension.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetTensionWithString", value);
	},

	getTension: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryTension", index);
		return this._valueSetByUnity;	// number
	},

	setInstrumentLength: function(length)
	{
		gameInstance.SendMessage("ImuscicaEngine", "SetInstrumentLength", length);
	},

	getInstrumentLength: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryInstrumentLength");
		return this._valueSetByUnity;	// number
	},
	
	getInstrumentLengthRounded: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryInstrumentLengthRounded");
		return this._valueSetByUnity;
	},

	getInstrumentLengthLimits: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryInstrumentLengthLimits");
		return this._valueSetByUnity;	// array of 2 numbers [min, max]
	},

	setBridgePos: function(index, pos)
	{
		var value = index.toString() + " " + pos.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBridgePosWithString", value);
	},
	
	getBridgePos: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBridgePos", index);
		return this._valueSetByUnity;	// number
	},
	
	getBridgePosRounded: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBridgePosRounded", index);
		return this._valueSetByUnity;	// number
	},
	
	setBridgeRatio: function(index, ratio)
	{
		var value = index.toString() + " " + ratio.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBridgeRatioWithString", value);
	},
	
	getBridgeRatio: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBridgeRatio", index);
		return this._valueSetByUnity;	// number
	},

	setBarNum: function(numBars)
	{
		gameInstance.SendMessage("ImuscicaEngine", "SetBarNum", numBars);
	},

	getBarNum: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarNum");
		return this._valueSetByUnity;	// number
	},

	setBarLength: function(index, length)
	{
		var value = index.toString() + " " + length.toString();
		gameInstance.SendMessage("ImuscicaEngine", "SetBarLengthWithString", value);
	},

	getBarLength: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLength", index);
		return this._valueSetByUnity;	// number
	},
	
	getBarLengthRounded: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLengthRounded", index);
		return this._valueSetByUnity;	// number
	},

	getBarLengthLimits: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarLengthLimits", index);
		return this._valueSetByUnity;	// array of 2 numbers [min, max]
	},

	// deprecated, use getPartColor instead
	getBarColor: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryBarColor", index);
		return this._valueSetByUnity;	// array of 3 numbers [r, g, b], each in [0,1]
	},

	getPartColor: function(index)
	{
		gameInstance.SendMessage("ImuscicaEngine", "QueryPartColor", index);
		return this._valueSetByUnity;	// array of 3 numbers [r, g, b], each in [0,1]
	},

	uploadObj: function(url)
	{
		gameInstance.SendMessage("ImuscicaEngine", "UploadObj", url);
	},
	
	exportObj: function()
	{
		gameInstance.SendMessage("ImuscicaEngine", "ExportObj");
	},
	
	exportStl: function(binary)
	{
		if (binary)
		{
			gameInstance.SendMessage("ImuscicaEngine", "ExportBinaryStl");
		}
		else
		{
			gameInstance.SendMessage("ImuscicaEngine", "ExportStl");
		}
	},
	
	initiatePluck: function(partIndex, callCB)
	{
		var ci = callCB ? 1 : 0;
		var value = partIndex.toString() + " " + ci.toString();
		gameInstance.SendMessage("ImuscicaEngine", "InitiatePluckWithString", value)
	},
	
	// -----------
	//	callbacks
	// -----------
	callbacks:
	{
		onEngineLoaded: function()
		{
			var version = ImuscicaEngine.getVersion();
			var major = version[0];
			var minor = version[1];
			var patch = version[2];
			var commitInfo = version[3];
			console.log("Leopoly Engine loaded: version " + major + "." + minor + "." + patch + " " + commitInfo);
		},
		
		onBridgeMoved: function(index, pos, ratio)
		{
			console.log("Monochord bridge " + index + " moved to " + pos + " (" + ratio * 100.0 + "%)");
		},
		
		onPlucked: function(index)
		{
			console.log("instrument part " + index + " plucked");
		},
		
		onBarSelected: function(index)
		{
			console.log("bar " + index + " selected");
		},
		
		onBarLengthChanged: function(index, length)
		{
			console.log("bar " + index + " length changed to " + length);
		},
		
		onInstrumentLengthChanged: function(length, interactionEnded)
		{
			console.log("instrument length changed to " + length + ", interaction ended: " + interactionEnded);
		},
		
		onUploadCompleted: function(responseText)
		{
			console.log("upload completed: " + responseText);
		},
		
		onExportCompleted: function(blob, fileName)
		{
			saveAs(blob, fileName);
		}
	}
};