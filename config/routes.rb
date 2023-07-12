Rails.application.routes.draw do
  resources :codes
  resources :pot8s
  resources :users
  resources :teams
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
