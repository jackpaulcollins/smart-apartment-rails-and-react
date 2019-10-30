Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'days_since_taco_bell/index'
      post 'days_since_taco_bell/create', to: 'days_since_taco_bell#create'
      put 'update/:id', to: 'days_since_taco_bell#update'
    
      get 'bills/index'
      post 'bills/create'
      get 'bills/show/:id', to: 'bills#show'
      delete 'destroy/:id', to: 'bills#destroy'
  
      get 'things/index'
      post 'things/create'
      get 'things/show/:id', to: 'things#show'
      delete '/destroy/:id', to: 'things#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
