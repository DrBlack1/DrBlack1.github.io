//
//  SomeData.swift
//  CoffeeShopDropppp
//
//  Created by Codenation19 on 12/12/2018.
//  Copyright © 2018 codenation. All rights reserved.
//

import Foundation

final class SomeData {
    
    static func generateCoffeesData() -> [Coffee] {
        
        return [
        
            Coffee(name:"Latte", store: "Starbucks", rating: 5),
            
            Coffee(name:"Latte", store: "Costa", rating: 3),
            
            Coffee(name:"Latte", store: "Nero", rating: 0)


        ]
    }
}
