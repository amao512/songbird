1. Task:
   https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids.md
2. App screenshot:
   https://i.imgur.com/9N60IHl.png
3. Deploy:  
   https://rolling-scopes-school.github.io/hallovarvara-RS2020Q1/english-for-kids/dist/
4. Done 19.04.20 (deadline 19.04.20)
5. Score: 200 / 200
- [x] UI, markup, design of main page (+10) and category page (+10)
    - [x] both mobile and desktop versions have all described elements
    - [x] fulfilled all task requirements to app design
- [x] UI, markup, design of menu (+10)
    - [x] both mobile and desktop versions have all described elements
    - [x] fulfilled all task requirements to app design
    - [x] menu links work
    - [x] current page link differ from others
    - [x] all pages have sliding menu
    - [x] menu closes with smooth animation by clicking on crest or any other app element including menu link
- [x] Training mode (+20)
    - [x] english words sound while clicking on card
    - [x] all cards has button for flipping. there's word translation at the back side. card flip back after mouse cursor goes out from card area.
- [x] Code quality (+30)
    - [x] code dublicating minimized (+10)
    - [x] modular JS (+10)
    - [x] webpack, eslint, eslint-config-airbnb-base, babel connected and are used (+10)
- [x] Game mode (+80):
    - [x] click on mode switcher Train/Play turns on game mode. Here're no flipping button and text on card. Card image takes up all card area (if it's ok with app design). „Start game” button appears. (+10)
    - [x] clicking on „Start game” button activate english word pronouncing. Word should be one of presented on page and it should be chosen randomly. For each page and every new game words should generating randomly from scratch (+10)
    - [x] a click on „Start game” button change text on it with „Repeat” icon and view of button. Clicking on „Repeat” button repeats current word pronouncing (+10)
    - [x] if user've clicked on wrong card, „error” sound sounds (+10)
    - [x] if user've clicked on correct card, „correct” sound sounds and new random english word from this page is pronouncing. One word can't participate twice in one game. (+10)
    - [x] card with guessed word become inactive and changes view. Clicking on inactive card doesn't call sound effects and doesn't affect on game score. (+10)
    - [x] when game's started, every click on active card is right or wrong answer. They're shown up like stars or other symbols of different colors on rating panel. Rating panel shows up in game mode. If rating panel fulls of stars, first stars hide, new continues to show. (+10)
    - [x] when all words've guessed: (+10)
        - if all of them are rightly guessed, „success” sound sounds, cards hide, happy smile shows (or another appropriate image),
        - else „failure” sound sounds, cards hide, sad smile shows (or another appropriate image) and mistakes quantity,
        - app automatically redirects to main page with categories' list.
- [x] Statistics page (+40):
    - [x] here're all categories, all words of each category, every word's translation. Page must be shown correctly minimum on 320 px. (+10)
    - [x] close to each word are shown and saved in statistics after page reload: (+10)
        - number of clicks on it's card in training mode,
        - times word was guessed,
        - number of mistaken word in game mode,
        - mistakes density of word.
    - [x] feature to sort data. Strings sort alphabetically, number by number. Sort can be ascending and descending and must cover all data. (+10)
    - [x] here're buttons „Repeat difficult words” и „Reset”: (+10)
        - „Reset” resets statistics,
        - „Repeat difficult words” open category-like page with words with the highest mistakes density. There can be 0–8 words according in how many words user guessed wrong in game mode. After clicking on „Reset” button, on „Repeat difficult words” page should be no words.
- [x] Penalties (0):
    - [x] In app less than 8 categories and less than 8 words in each category (-10)
    - [x] Errors while app's working. (-10 for each, but no more than the total number of points for requirement implementation)
    - [x] Not comply with the requirements for Pull Request, repository, commits names (-10) scores by mentor