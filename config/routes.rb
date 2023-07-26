Rails.application.routes.draw do
  resources :picks
  resources :sessions
  resources :codes
  resources :pot8s
  resources :users
  resources :teams
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post '/picks', to: 'picks#create'



end
