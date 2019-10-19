Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'things/index'
      post 'things/create'
      get 'show/:id', to: 'things#show'
      delete '/destroy/:id', to: 'things#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
