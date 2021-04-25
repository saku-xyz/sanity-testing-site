export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6085524d4935d26daad88979',
                  title: 'Sanity Studio',
                  name: 'sanity-testing-site-studio',
                  apiId: 'a67ecca5-521a-4c73-bf44-ac86b43da07e'
                },
                {
                  buildHookId: '6085524d7659ba7f46105eaf',
                  title: 'Blog Website',
                  name: 'sanity-testing-site',
                  apiId: '6508b6f0-825c-47c0-af76-e75495f9f1ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saku-xyz/sanity-testing-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-testing-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
