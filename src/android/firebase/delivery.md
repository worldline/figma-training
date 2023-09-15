# Delivery

In this section you will learn how to distribute your application with `Firebase App Distribution` to a list of testers.

## Generate an APK

First, you need to generate an APK file.

You can do this directly in Android studio: `Build` -> `Generate Signed Bundle or APK` -> `APK`

Then you need to generate a Keystore file by clicking on `Create new`. It is required for signing your application. Most field are not required, you can just put a name in the bottom frame.

Finally, you can select the `debug` variant. If you want to understand how these `debug` and `release` work, you can learn more in [this Codelabs](https://developer.android.com/codelabs/build-variants). It's not required for this course, all you need to understand here is that: 

- The `debug` version is debuggable 
- The `release` version is not debuggable and is optimized to be distributed on the Play Store

## Publish the APK

All you need to do now is go on the Firebase App Distribution menu in the Firebase console, enable the service and drag & drop your apk file.

Add your email to the testers list, then you should receive an email inviting you to test the app.

If you want us to test the app, you can add `tpinsa.droid@gmail.com` to the testers list.

You can also add each others email addresses to receive feedbacks from others ;)