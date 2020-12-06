interface InitializationOptions {
	workspaceFolderPath: string
	configuration: Configuration
}

interface Configuration {
	enableGoToDefinition: boolean
	enableWorkspaceSymbols: boolean
	enableIdAndClassNameCompletion: boolean
	enableFindAllReferences: boolean
	activeHTMLFileExtensions: string[]
	activeCSSFileExtensions: string[]
	excludeGlobPatterns: string[]
	alwaysIncludeGlobPatterns: string[]
	alsoSearchDefinitionsInStyleTag: boolean
	ignoreSameNameCSSFile: boolean
	ignoreCustomElement: boolean
	ignoreFilesBy: string[]
	enableLogLevelMessage: boolean
}
