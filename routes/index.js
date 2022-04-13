const express = require('express')
const { graphql } = require('@octokit/graphql')
const graphqlAuth = graphql.defaults({
    headers: { authorization: 'token ' + process.env.GITHUB_PERSONAL_ACCESS_TOKEN },
})

module.exports = express
  .Router()

  .get('/', function (req, res) {
    // Get the repository information from my GitHub account
    graphqlAuth(`{
      repository(owner: "cmda-minor-web", name: "project-2-2122") {
        name
        forkCount
        forks(first: 100) {
          totalCount
          nodes {
            name
            nameWithOwner
            url
            updatedAt
            owner {
              login
            }
            languages(first: 10) {
              totalCount
              totalSize
              edges {
                node {
                  color
                  id
                  name
                }
                size
              }
            }
            issues(first: 100) {
              totalCount
            }
            pullRequests(first: 100) {
              totalCount
            }
            pushedAt
            hasIssuesEnabled
          }
        }
      }
    }`).then((jsonData) => {
      res.render('index', {
        data: jsonData
      })
    })
  })
