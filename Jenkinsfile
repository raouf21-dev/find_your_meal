
def gv
pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
    }
    parameters {
        // string(name: 'VERSION', defaultValue: ' ', description: 'Test for string')
        choice(name: 'VERSION', choices: ['1.1.0', '1.3.0', '1.2.1'], description: 'Test for choice')
        booleanParam(name: 'executeTests', defaultValue: true, description: 'Test for boolean')
    }
    stages {
        stage("init"){
            steps {
                script {
                    echo "Initializing pipeline..."
                    gv = load 'script.groovy'
                }
            }    
        }
        stage('Build') {
            steps {
                script {
                    echo "Building.."
                    sh 'echo "doing build stuff.."'
                }
            }
        }
        stage('Test') {
            when{
                expression{
                    params.executeTests
                }
            }
            steps{
                script{
                    gv.testApp()
                }
            }
        }
        stage('Deploy'){
            steps{
                script{
                    def deployEnv = input(
                        message: "Select the environment to deploy to",
                        ok: "Done",
                        parameters:[
                        choice(name: "ENV", choices: ['dev', 'staging', 'prod'], description: "Select the environment")
                        ]
                    )
                        echo "Building version: ${params.VERSION}"
                        echo "deploying to ${deployEnv}"
                }
            }
        }
    }
}