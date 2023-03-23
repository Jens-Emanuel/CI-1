pipeline{

    agent any

    tools {nodejs "Node19"}

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e/*.cy.js", description: "Enter the script path that you want to execute")
        choice(name:'BROWSER',choices: ['chrome', 'edge','firefox'], description: "Pick the browser you would like to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo 'Building the application'
            }
        
        }
        stage('Tests'){
            steps{
                bat "npm i 12.7.0"
                bat "npx cypress run --headless --browser ${BROWSER} --spec ${SPEC}"
                
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
        }

    }
}