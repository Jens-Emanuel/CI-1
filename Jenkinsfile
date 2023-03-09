pipeline{

    agent any

    tools {nodejs "Node19"}

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e", description: "Enter the script path that you want to execute")
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
        stage('Dependencies'){
            steps{
                bat "npm i"
                
            }
        }

        stage('Tests'){
            steps{
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                bat "npm run cypress"
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
        }

   // post{
       // always{

      //  }
   // }
    }
}