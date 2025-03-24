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
                    parameters.executeTests
                }
            }
            steps{
                echo "Testing in progress...."
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploy....'
                    sh '''
                    echo "doing deploying stuff.."
                    '''
                }
            }
        }
    }
}