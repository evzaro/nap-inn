Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :nap_spots
  end

  get '/auth/facebook/callback', to: 'api/sessions#create_with_fb',
  defaults: {format: :json}
  root "static_pages#root"
end
