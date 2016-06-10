Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :nap_spots
    resources :bookings
  end

  get '/auth/facebook/callback', to: 'api/sessions#create_with_fb',
  defaults: {format: :json}

  get '/nap_spots/my_nap_spots', to: 'api/nap_spots#user_index',
  defaults: {format: :json}
  
  root "static_pages#root"
end
