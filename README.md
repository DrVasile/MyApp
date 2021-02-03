# Simple Application created with Cordova

## Requirements
- Node.js: 
  - [Node.js Official site](https://nodejs.org/en/);
- npm: 
  - (Node Package Manager: Comes with Node.js);
- Git: 
  - [Git Official Site](http://git-scm.com/) 
  - It is optional, for collaboration and code base hosting;
- Apache Cordova:
  - Install via npm: `npm install -g cordova`;
  - Check whether it's installed: `cordova --version`;
- Java (JDK):
  - [Java Official site](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html);  
  - Check whether it's installed: `java -version`;
- Android Studio:
  - [AStudio Official Site](https://developer.android.com/studio/index.html)

## Windows Environment variables
- Control Panel &#8594; System and Security &#8594; System &#8594; Advanced System Settings &#8594; Environment Variables;
- ANDROID_HOME: `C:\Users\vasil\AppData\Local\Android\Sdk` (Deprecated, so it can be skipped);
- ANDROID_SDK_ROOT: `C:\Users\Username\AppData\Local\Android\Sdk`;
- JAVA_HOME: `C:\Program Files\Java\jdkX` (where X is the version);
- Path:
  - `%JAVA_HOME%\bin` (for jdk);
  - `C:\Program Files\nodejs\` (for node.js/npm);
  - `C:\Program Files\gradle-Y\bin` (for gradle where Y is the version);
  - `%ANDROID_SDK_ROOT%\build-tools` (for android sdk build tools);
  - `%ANDROID_SDK_ROOT%\emulator` (for the emulators);
  - `%ANDROID_SDK_ROOT%\platform-tools` (for android sdk platform tools);
  - `%ANDROID_SDK_ROOT%\tools`;
  - `%ANDROID_SDK_ROOT%\tools\bin`;

## Commands
- Create a project: `cordova create App_Name`;
- Change directory to the app: `cd App_Name`;
- Add platform: `cordova platform add some_platform`;
- Run the app: `cordova run some_platform`;
