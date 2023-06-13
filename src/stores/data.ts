import { nanoid } from 'nanoid'
import type { Board, Column } from '@/types'

export const initialBoardsTemplate: Board[] = [
  {
    id: nanoid(),
    title: 'Agile Board',
    starred: true,
    columns: [
      {
        id: nanoid(),
        title: 'Done',
        tasks: [
          {
            id: nanoid(),
            title: 'Implement user authentication system',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Design and create database schema',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Conduct code review and address feedback',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Fix bug causing application crash on mobile devices',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create user interface mockups for client approval',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'To Do',
        tasks: [
          {
            id: nanoid(),
            title: 'Research and propose a new technology stack for the project',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Define project requirements and create a detailed specification document',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Set up development environment and configure version control system',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create initial project structure and file organization',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Conduct initial meeting with the client to discuss project goals and timeline',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'In Progress',
        tasks: [
          {
            id: nanoid(),
            title: 'Develop backend API endpoints for user management',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Design and implement frontend components for the landing page',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Write unit tests for critical application functionalities',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Integrate third-party payment gateway into the application',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Refactor code to improve performance and maintainability',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'On Hold',
        tasks: [
          {
            id: nanoid(),
            title: 'Wait for client feedback on the initial design proposal',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Postpone development pending resolution of a legal issue',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Put development on hold while waiting for external API integration documentation',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Delay development due to resource constraints or budgetary concerns',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Suspend work on a particular feature until a key decision is made by the client',
            createdAt: new Date()
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    title: 'Kanban Board',
    starred: false,
    columns: [
      {
        id: nanoid(),
        title: 'Backlog',
        tasks: [
          {
            id: nanoid(),
            title: 'Refactor legacy code',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Research and plan new feature implementation',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Investigate performance issues',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Review user feedback and prioritize improvements',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Define project roadmap and long-term goals',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Design',
        tasks: [
          {
            id: nanoid(),
            title: 'Create wireframes for new user interface',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Design logo and branding assets',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create high-fidelity mockups for client approval',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Design responsive layouts for multiple devices',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Iterate and refine UI/UX based on user testing feedback',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Todo',
        tasks: [
          {
            id: nanoid(),
            title: 'Implement user registration functionality',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Set up project dependencies and build system',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create basic project structure',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Integrate third-party API for data retrieval',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Define database schema and create initial models',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Doing',
        tasks: [
          {
            id: nanoid(),
            title: 'Implement user login functionality',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Develop core application features',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Handle user authentication and authorization',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Integrate external libraries or frameworks',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Implement data validation and error handling',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Code Review',
        tasks: [
          {
            id: nanoid(),
            title: 'Review and refactor existing codebase',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Ensure adherence to coding standards and best practices',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Identify and fix code quality and maintainability issues',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Perform code reviews for team members',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Address code review feedback and make necessary changes',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Testing',
        tasks: [
          {
            id: nanoid(),
            title: 'Write unit tests for critical application components',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Perform integration testing with external systems',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create end-to-end test cases and automate testing',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Perform regression testing after bug fixes',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Validate application behavior across different browsers',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Done',
        tasks: [
          {
            id: nanoid(),
            title: 'Deploy application to production environment',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Document project architecture and setup instructions',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Prepare release notes and update project documentation',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Hand off project to maintenance and support team',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Celebrate project completion with the team!',
            createdAt: new Date()
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    title: 'Project Management',
    starred: false,
    columns: [
      {
        id: nanoid(),
        title: 'Project Resources',
        tasks: [
          {
            id: nanoid(),
            title: 'Assign project manager and team leads',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Allocate required budget and resources',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Identify and acquire necessary tools and software',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Create project timeline and milestones',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Define roles and responsibilities of project team members',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Questions For Next Meeting',
        tasks: [
          {
            id: nanoid(),
            title: 'Discuss project requirements and scope with stakeholders',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Review and clarify project deliverables',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Address any concerns or risks identified in the project',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Gather feedback on project progress and future direction',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Identify potential blockers or obstacles and seek solutions',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'To Do',
        tasks: [
          {
            id: nanoid(),
            title: 'Create project proposal and obtain client approval',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Gather requirements and create a detailed project plan',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Assign tasks and responsibilities to team members',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Setup project communication channels and collaboration tools',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Hold kickoff meeting with the project team',
            createdAt: new Date()
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    title: 'Company Overview',
    starred: false,
    columns: [
      {
        id: nanoid(),
        title: 'Teams',
        tasks: [
          {
            id: nanoid(),
            title: 'Form a new development team for a client project',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Recruit and onboard new team members for the sales team',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Organize team-building activities for the marketing team',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Assign team leads for the finance and accounting teams',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Provide training and professional development opportunities for all teams',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Up Next',
        tasks: [
          {
            id: nanoid(),
            title: 'Prepare for the upcoming company-wide conference',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Plan and execute the annual performance review process',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Evaluate and implement new HR policies and procedures',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Conduct interviews for open positions in the operations department',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Review and update the company mission and vision statements',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Current Projects',
        tasks: [
          {
            id: nanoid(),
            title: 'Manage and oversee the implementation of a new CRM system',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Coordinate the launch of a new product in collaboration with the product team',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Monitor and support ongoing client projects',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Collaborate with the IT department on infrastructure upgrades',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Lead the development of a company-wide sustainability initiative',
            createdAt: new Date()
          }
        ]
      },
      {
        id: nanoid(),
        title: 'Completed Projects',
        tasks: [
          {
            id: nanoid(),
            title: 'Successfully launched a new e-commerce platform',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Implemented a company-wide remote work policy',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Completed the rebranding and redesign of the company website',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Executed a successful marketing campaign for a major client',
            createdAt: new Date()
          },
          {
            id: nanoid(),
            title: 'Improved customer satisfaction scores through enhanced customer support',
            createdAt: new Date()
          }
        ]
      }
    ]
  }
]

export const newBoardColumnsTemplate: Column[] = [
  {
    id: nanoid(),
    title: 'Done',
    tasks: [
      {
        id: nanoid(),
        title: 'Implement user authentication system',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Design and create database schema',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Conduct code review and address feedback',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Fix bug causing application crash on mobile devices',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Create user interface mockups for client approval',
        createdAt: new Date()
      }
    ]
  },
  {
    id: nanoid(),
    title: 'To Do',
    tasks: [
      {
        id: nanoid(),
        title: 'Research and propose a new technology stack for the project',
        createdAt: new Date()
      },
      {
        id: nanoid(),
        title: 'Define project requirements and create a detailed specification document',
        createdAt: new Date()
      }
    ]
  },
  {
    id: nanoid(),
    title: 'In Progress',
    tasks: []
  },
  {
    id: nanoid(),
    title: 'On Hold',
    tasks: []
  }
]
