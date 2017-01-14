#!/usr/bin/env node

const { resolve } = require('path')
const { prompt } = require('inquirer')
const gulp = require('gulp')
const ejs = require('gulp-ejs')

init()

function init () {
  const questions = [
    {
      name: 'type',
      message: 'What are you building?',
      type: 'list',
      choices: [{
        name: 'React and Redux App',
        value: 'react-redux'
      }]
    },
    {
      name: 'author',
      message: `What's your name?`,
      default: 'Guilherme Rv Coelho'
    },
    {
      name: 'username',
      message: `What's your github username?`,
      default: 'grvcoelho'
    },
    {
      name: 'name',
      message: 'Choose a nice pop culture name:',
      default: 'death-star'
    },
    {
      name: 'description',
      message: 'Write a small description (the more buzzwords the better):'
    }
  ]

  prompt(questions)
    .then((answers) => {
      const { type, name } = answers
      const src = resolve(__dirname, `./templates/${type}/**/*`)
      const dest = resolve(process.cwd(), name)

      gulp
        .src(src, { dot: true })
        .pipe(ejs(answers))
        .pipe(gulp.dest(dest))
    })
}
