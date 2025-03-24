pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
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
            steps {
                script {
                    echo "Testing.."
                    sh '''
                    echo "doing test stuff.."
                    '''
                }
            }
        }
        stage('Deliver') {
            steps {
                script {
                    echo 'Deliver....'
                    sh '''
                    echo "doing delivery stuff.."
                    '''
                }
            }
        }
    }
}