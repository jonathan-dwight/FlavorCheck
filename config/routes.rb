Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: { format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :burgers
    resources :restaurants, only: [:show, :index]
    resources :followers, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
