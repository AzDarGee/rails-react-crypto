class Currency < ApplicationRecord
    
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end
    
    def current_price
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug='
        headers = {
            'X-CMC_PRO_API_KEY': Rails.application.credentials.coin_market_cap[:api_key],
            'Accept': 'application/json'
        }
        
        request = HTTParty.get(
            url + self.slug, 
            :headers => headers
        )
        response = JSON.parse(request.body)["data"]["1"]["quote"]["USD"]["price"]
        
    end
    
    
end
