//
//  SomeData.swift
//  CoffeeShopDrop
//
//  Created by Codenation9 on 02/10/2018.
//  Copyright © 2018 Code Nation. All rights reserved.
//

import Foundation

final class SomeData {
    
    static func generateCoffeesData() -> [Coffee] {
        return [
            Coffee(name: "Latte", store: "Starbucks", rating: 5),
            Coffee(name: "Latte", store: "Costa", rating: 3),
            Coffee(name: "Latte", store: "Nero", rating: 2)
        ]
    }
}
