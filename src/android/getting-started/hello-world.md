# Hello World

Let's create your first Android application!

## Tooling

- [Android Studio](https://developer.android.com/studio) (Use Android Studio Giraffe)

- Any GIT client (We like [GitKraken](https://www.gitkraken.com/) and can help you with it but you can use whatever tool you like, including command line)

## Create a new project

Once Android Studio is ready to use, go to `File -> New -> New Project` and chose `Empty Activity`.

Fill out the form like this:

- Name
    - Whatever you want

- Package name
    - **com.tc.$name.$firstname** if you work alone (e.g. com.tc.mercier.simon)
    - **com.tc.$groupname** if you work in a group (e.g. com.tc.myawesomegroup)

- Minimum SDK
    - **API 26**

## Test the app

You can either use a personal Android device (Android 8.0 or above) or use the Android Studio emulator.

### Option 1: Real device

You need to enable `developer mode` on your phone:

- Go to the phone settings
- Go to `About` menu
- Search for `Build number` and tap 7 times on it. You should see a toast stating that your are now a developer (congratulations).

You can now plug the device to your computer, a popup should appear on your phone asking you if you trust the computer.

Your phone is now ready to use.

### Option 2: Emulator

In the top bar of Android Studio, at the left of the `Run` button (the green arrow), choose `Device Manager` in the list.

A menu should open at the right of the screen, click the  `Create device` button. From there follow instructions to create the virtual device.

### Run the app

You should now see your device (real or virtual) in the list at the top of Android Studio.

The app should launch when you hit the `Run` button (green arrow).

## Push the result

We will provide to each group a Gitlab group to push the project.