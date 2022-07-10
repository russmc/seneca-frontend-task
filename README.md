# Seneca Tech Task

This project is an attempted solution to the Seneca Tech Task. The task is to create the toggles component, matching the provided reference design. The full brief can be found [here](./brief/brief.md) along with a [demo video](./brief/togglesVideo.mov).

## The Solution

This is a react app so you can pull the repo and start the app with `npm start`.

You will see a single toggle with two options. Toggling to the correct or incorrect answer will change the background to green or red respectively.

## Workflow

There is a develop and a main branch. The develop branch is where new features/fixes get merged in. The main branch is where a copy of the 'production' version of the app will live. The first realse to production will occur when the full list of requirements from the brief have been met (not including the extension tasks).

After reading the brief and throughout development, new issues detailing potential changes to the codebase were created. Since this is a solo project, issue prioritisation was done on the fly (rather than in sprint planning). For each issue a feature branch was created which was worked upon, then merged into develop when complete via a pull request. Merges can only occur after the resolution of any merge conflicts. Also, any CI checks would need to pass before merging although there aren't any yet. The name of the feature branch must start with a reference to the issue number. 

Pull requests are where the changes implemented on the referenced feature branch are descibed. I tend to create the pull request stratight away and use the comments to document any thoughts and have discussions (if working collaboratively). Again, since this was a solo project, no approvals were required. 

## Assumptions

- Only maintained 3rd party libraries are permitted (although I didn't use any)
- The question options can be written in the .tsx file that renders the Toggles component

## Limitations

- currently only supports a single toggle
- currently only a binary selection behaviour with a single clickable area across the component (see [issue 15](https://github.com/russmc/seneca-frontend-task/issues/15)), and because of this, content cannot lock upon selecting the correct answer
- does not yet fully match styling or responsive design from the brief
- only two options with a single correct answer is currently supported

See the repo [issues](https://github.com/russmc/seneca-frontend-task/issues) for a more complete list.
