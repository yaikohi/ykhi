---
layout: "@layouts/BlogPost.astro"
title: "Day 01"
description: "Rust again, first blog abt aoc 2022"
pubDate: "Dec 13 2022"
# heroImage: "/placeholder-hero.jpg"
---

The first time I tried advent of code I was mostly using python, it was the only language I knew at the time two or so years ago; last year I tried it in rust but failed miserably lol.
I wanted to test myself and try to do it in rust again this year because I do not want to fall behind the hype.

# Setup
I was struggling a lot with setting up a project structure already. After I had completed the first challenge I took a lot of stuff from [Chris Biscardi's youtube channel](https://www.youtube.com/@chrisbiscardi).

Run the following cargo command to scaffold the new project with (N being the number of the day of the challenge). 
```bash 
cargo new --bin day-<N>
``` 

Then I created the following structure:

```
src
├── bin
│  ├── part-1.rs
│  └── part-2.rs
└── lib.rs
```

In `lib.rs` is where you'd write all the code for completing the challenge. You'd have a `process_part1` and a `process_part2` function that complete the challenges.
Then in `part-1.rs` and in `part-2.rs` you can call the correlating functions with a println statement, logging the answer to the console.

In `lib.rs` is also where I just put the tests. Ideally you'd write these in a seperate file I think but yes.

# Part one

As always, the first days aren't as complicated which is nice because I can brush up on a lot of basic syntax stuff I hadn't done before, like iterating over lists in rust.
In rust, arrays are lazy iterators and this means that you need to call an iterator method (like `into_iter()`)  on the array in order to be able to iterate over it. 

*Source: [The Rust book - Processing a series of items with iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)*

Just read to string, split the values based on `\n` and create a vector to then futher iterate upon.
Sum the pairs and calculate the max value.

```rust
fn process_part1(input: &str) {
    let processed_text = input.split("\n\n").map(|elf_calories| {
        elf_calories
            .lines()
            .map(|calorie| calorie.parse::<u32>().unwrap())
            .sum()
        })
        .max()
        .collect::<Vec<u32>>();
    }
```

# Part two

Very similar to part one :) This time calculating the sum of values of the top three calorie groups / elves.


```rust
fn process_part2(input: &str) -> u32 {
    // same as part one
    let processed_input = input.split('\n\n')
    .map(|elf_calories| {
        elf_calories
            .lines()
            .map(|calorie| calorie.parse::<u32>().unwrap())
            .sum()
    }).collect::<Vec<u32>>();
    // sort the array to find the three highest values
    let sorted_input = processed_text.sort_by(|a, b| b.cmp(a));

    // take the three highest values and sum them
    let result = sorted_input.iter().take(3).sum::<u32>();

    result
}

```
