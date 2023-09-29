# Data

::: tip Lessons 📚

[Kotlin Bootcamp](https://developer.android.com/courses/kotlin-bootcamp/overview)

These are Android codelabs to help learn the basics of the Kotlin programming language.

You will need to download [IntelliJ Community](https://www.jetbrains.com/idea/download/?section=windows) as explained in lesson 1 (the Community version, below the Ultimate one is completely free) or you can use the [Kotlin Playground](https://play.kotlinlang.org/).
:::

Once you feel familiar enough with Kotlin, you can create temporary fake data in your app:
- First create a new package at the same level as the `ui` package, you can name it `data` for example.
- Then create Kotlin files inside of it to write your code.

Create the data structures you will need to test your first views before your app is connected to the API. Once your app will be connected to the API, you will be able to delete these fake data.

For example, for the movies application we saw previously, it could be interesting to create a few movies to display:

``` kotlin
data class Movies(
    val title: String, 
    val synopsis: String, 
    val rating: Int
) {
    companion object {
        fun fakeMovies() = listOf(
            Movies("title of the first movie", "synopsis ...", 87),
            Movies("title of the second movie", "synopsis ...", 65)
        )
    }
}
```

And why not add some functions to easily work with this data, depending of what you will need to display in your app: 

``` kotlin
fun getMoviesWithGoodRating() = Movies.fakeMovies().filter { it.rating > 70 }
```
