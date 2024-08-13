pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'main', url: 'https://github.com/kamlangek1devops/service1.git'
            }
        }

        stage('Build') {
            steps {
                //bat 'echo "Building the project on Windows..."'
                script {
                    bat 'echo "Building the project on Windows..."'
                    bat 'docker build -t testapp1:1.0.1 .'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo ' "Deploying the application..."'
            }
        }
    }

    post {
        always {
            // Actions that run after the pipeline completes
            echo 'Cleaning up...'
        }
        success {
            // Actions that run only if the pipeline succeeds
            echo 'Build succeeded!'
        }
        failure {
            // Actions that run only if the pipeline fails
            echo 'Build failed.'
        }
    }
}
