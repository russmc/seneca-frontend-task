# Seneca Tech Task

This project is an attempted solution to the Seneca Tech Task. The task is to create the toggles component, matching the provided reference design. The full brief can be found [here](./brief/brief.md) along with a [demo video](./brief/togglesVideo.mov).

## The Solution

This is a react app so you can pull the repo and start the app with `npm start`.

You will see multiple toggles with various numbers of options. Toggling to the correct answer will lock the toggle and change the background colour. The background colour will indicate how correctly you have answered.

I deviated from the original design styles and colours in order to implement dynamic background colours, where the range of hue values are selected depending on the number of toggles. The first and last hue values are always red and green representing none correct to all correct respecively. I didn't dynamically alter the toggle border colour (which does change in the original design) as I wasn't sure how this should vary with the dynamic background.

## Workflow

There is a develop and a main branch. The develop branch is where new features/fixes get merged in. The main branch is where a copy of the 'production' version of the app will live. The first release to production will occur when the full list of requirements from the brief have been met (not including the extension tasks).

After reading the brief and throughout development, new issues detailing potential changes to the codebase were created. Since this is a solo project, issue prioritisation was done on the fly (rather than in sprint planning). For each issue a feature branch was created which was worked upon, then merged into develop when complete via a pull request. Merges can only occur after the resolution of any merge conflicts. Also, any CI checks would need to pass before merging although there aren't any yet. The name of the feature branch must start with a reference to the issue number.

Pull requests are where the changes implemented on the referenced feature branch are described. I tend to create the pull request straight away and use the comments to document any thoughts and have discussions (if working collaboratively). Again, since this was a solo project, no approvals were required.

## Assumptions

- Only maintained 3rd party libraries are permitted (although I didn't use any)
- The question options can be written in the .tsx file that renders the Toggles component

## Limitations

- I didn't get round to the responsive design as I didn't want I give myself any more time on the task
- No enforcement on text length, currently will overflow

See the repo [issues](https://github.com/russmc/seneca-frontend-task/issues) for a list of tasks I would do with more time.

## Lessons Learnt

This was a really interesting task and I was eager so I jumped in straight away. I think ultimately this was an issue because I didn't have a high level plan. I started with a simple binary toggle which I later realised did not meet the requirements in the brief, which prompted significant refactoring.

If I were to start the task again I would break the ui into components and categorise them. I would then have a map of the project which would make it easier for me to think about which components should be responsible for which functionality and start to assign state. Having a better plan at the start would make it easier to create and track progression through the issue list.

In future I would think more about how component styling is handled. I used a mixture of inline styles and external stylesheets in a way that makes it difficult to understand where a component's styles come from. I know there are many different approaches to component styling, including 3rd party libraries, which I don't have a lot of experience with. I also think the way document objects were handled could be improved, perhaps using the useRef hook.

I am proud of the dynamic background colours and think it works quite well. I always enjoy making thing more flexible/versatile, and in this case, manually assigning more background colours when the number of toggles changes is avoided.
