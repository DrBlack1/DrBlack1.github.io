//
//  BasketViewController.swift
//  test
//
//  Created by Codenation13 on 19/06/2019.
//  Copyright © 2019 codenation. All rights reserved.
//

import Foundation
import UIKit

class BasketViewController: UIViewController{
    
    //MARK: Outlets
    
    @IBOutlet weak var itemsLabel: UILabel!
    
    @IBOutlet weak var buyButton: UIButton!
    
    @IBOutlet weak var thankYouLabel: UILabel!
    //MARK: Actions
    
    
    @IBAction func buyButtonAction(_ sender: Any) {
        stellaCount = 0
        martiniCount = 0
        sazeracCount = 0
        waterCount = 0
        basketCount = 0
        thankYouLabel.text = "Thank you for your purchase! The order will be 10 minutes."
        basketItems()
    }
    
    //MARK: Functions
    
    func basketItems() {
        itemsLabel.text = """
        Stella: \(stellaCount)\n
        Espresso: \(martiniCount)\n
        Sazerac: \(sazeracCount)\n
        Water: \(waterCount)\n
        Total Price: £\(basketCount)
        """
    }
    
//    override func viewWillAppear(_ animated: Bool) {
//       basketItems()
//    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        basketItems()
        view.self.backgroundColor = UIColor(red: 206/255, green: 207/255, blue: 201/255, alpha: 1)
        // Do any additional setup after loading the view, typically from a nib.
    }

}
