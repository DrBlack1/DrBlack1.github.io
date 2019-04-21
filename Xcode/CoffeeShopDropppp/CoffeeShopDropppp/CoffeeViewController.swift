//
//  CoffeeViewController.swift
//  CoffeeShopDropppp
//
//  Created by Codenation19 on 12/12/2018.
//  Copyright © 2018 codenation. All rights reserved.
//

import UIKit

class CoffeeViewController: UITableViewController {

  var coffees = SomeData.generateCoffeesData()

}

extension CoffeeViewController {
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return coffees.count
    }
    
    
    override func tableView(_ tableView: UITableView,
        cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CoffeeCell",
            for: indexPath) as! CoffeeCell
        
        let coffee = coffees[indexPath.row]
        cell.coffee = coffee
        return cell
    }
}

