---
layout: "@layouts/BlogPost.astro"
title: "Day 02"
description: "I am still trying"
pubDate: "Dec 13 2022"
# heroImage: "/placeholder-hero.jpg"
---

definitely feel better about day 2 since I covered most 'basic' syntax for iteration with rust on day 1 :)

# Part one
Today was about rock paper scizzors. The input was a list of various rock, paper, scizzors games and you had to calculate the score you'd get at the end of all the games.

I did not really feel like I was able to come up with a really smart solution but to map out all the posible games with the corresponding result.


```rust
pub fn process_part1(input: &str) -> String {
    let mut res: usize = 0;

    let filtered_input = input.lines()
        .map(|line| line.split(" ").collect::<Vec<&str>>())
        .collect::<Vec<Vec<&str>>>();
    
    for game in filtered_input {
        match game[..] {
                 ["A", "X"] => res += 4
                 ["A", "Y"] => res += 8,
                 ["A", "Z"] => res += 3,
                 ["B", "X"] => res += 1,
                 ["B", "Y"] => res += 5,
                 ["B", "Z"] => res += 9,
                 ["C", "X"] => res += 7,
                 ["C", "Y"] => res += 2,
                 ["C", "Z"] => res += 6,
                 _ => println!("Error!"),
            }
        }
        res.to_string()
    }

```

# Part two
It was actually the same problem but with different scores per game.
```rust
pub fn process_part1(input: &str) -> String {
    let mut res: usize = 0;

    let filtered_input = input.lines()
        .map(|line| line.split(" ").collect::<Vec<&str>>())
        .collect::<Vec<Vec<&str>>>();
    
    for game in filtered_input {
        match game[..] {
                 ["A", "X"] => res += 3,
                 ["A", "Y"] => res += 4,
                 ["A", "Z"] => res += 8,
                 ["B", "X"] => res += 1,
                 ["B", "Y"] => res += 5,
                 ["B", "Z"] => res += 9,
                 ["C", "X"] => res += 2,
                 ["C", "Y"] => res += 6,
                 ["C", "Z"] => res += 7,
                 _ => println!("Error!"),
            }
        }
        res.to_string()
    }

```
