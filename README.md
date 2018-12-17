# This is The Example Project of app using Crashlytics
A Project  React Native library for Fabric, Crashlytics and Answers only For IOS using [react-native-fabric](https://github.com/corymsmith/react-native-fabric)

## Versioning
- For React Native > 0.40 use version 0.5.1
- For React Native < 0.40 use version 0.3.2

## Installation

- clone this repo

### add the dependencies.
 - using `npm install`
 - link the libs using `react-native link`

 this project using cocoapods for linking the library to the project
 #### Pod installation
 go to your ios directory and do this
  - `pod init`
  - open your Podfile. it can be done by `open Podfile` or `nano Podfile` or else..
  - replace all the content in your Podfile with this
  ```# Uncomment the next line to define a global platform for your project
        # platform :ios, '9.0'

        target 'RNFabricExample' do
        # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
        # use_frameworks!

        # Pods for RNFabricExample

            pod 'Fabric'
            pod 'Crashlytics'
            # pod 'ReactNativeFabric', :path => '../node_modules/react-native-fabric'
        target 'RNFabricExample-tvOSTests' do
            inherit! :search_paths
            # Pods for testing
        end

        target 'RNFabricExampleTests' do
            inherit! :search_paths
            # Pods for testing
        end

        end

        target 'RNFabricExample-tvOS' do
        # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
        # use_frameworks!

        # Pods for RNFabricExample-tvOS

        #target 'RNFabricExample-tvOSTests' do
        # inherit! :search_paths
            # Pods for testing
        #end

        end
```
- then save the `Podfile`
- `pod install`

#### Run the app
- `react-native run-ios`


#### Note
 - the configuration using react-native-fabric is pretty trickey, make sure you've completed the instruction that [react-native-fabric]    (https://github.com/corymsmith/react-native-fabric) and fabric.io provide.
 - go to fabric.io to initiate your account.
 - if you have the issue that tells the library is undefine, try [this](https://github.com/corymsmith/react-native-fabric/issues/102#issuecomment-279296313)



