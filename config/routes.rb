Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :nap_spots
  end

  get '/auth/facebook/callback', to: 'api/sessions#create'
  root "static_pages#root"
end
