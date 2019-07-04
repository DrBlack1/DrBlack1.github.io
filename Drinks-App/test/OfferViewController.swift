//
//  OfferViewController.swift
//  test
//
//  Created by Codenation13 on 18/06/2019.
//  Copyright © 2019 codenation. All rights reserved.
//

import Foundation
import UIKit

class OfferViewController: UIViewController{
    
    //MARK: Variables
    
    
    //MARK: Outlets
    
    
    //MARK: Actions
    @IBAction func oneDrinkButton(_ sender: Any) {
       
        oneDrinkOffer()
    }
    
    func oneDrinkOffer() {
        mathLogic()
//        global.stellaCount += 1
//        global.martiniCount += 1
//        global.sazeracCount += 1
//        global.waterCount += 1
//        global.offerCount += 1
        
    }
    @IBAction func twoDrinkButton(_ sender: Any) {
        mathLogic()
        mathLogic()
    }
    
    
    
    
    //MARK: Functions
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
        view.self.backgroundColor = UIColor(red: 206/255, green: 207/255, blue: 201/255, alpha: 1)
        // Do any additional setup after loading the view, typically from a nib.
    }
}
