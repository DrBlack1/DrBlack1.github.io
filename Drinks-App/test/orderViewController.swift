//
//  orderViewController.swift
//  test
//
//  Created by Codenation13 on 18/06/2019.
//  Copyright © 2019 codenation. All rights reserved.
//

import Foundation
import UIKit



class orderViewController: UIViewController{
    
    //MARK:Variables
//    var stellaCount = 0
//    var martiniCount = 0
//    var sazeracCount = 0
//    var waterCount = 0
//    var basketCount = 0
    var undoCount = 0
    var origOfferNum = 10
//    var offerCount = 0
    
    
    
    //MARK: Outlets
    
    @IBOutlet weak var orderLabel: UILabel!
    
    
    @IBOutlet weak var price: UILabel!
    //MARK: Actions
    
    
    @IBAction func StellaButton(_ sender: Any) {
        stellaCount += 1
        basketCount += 4
        undoCount = 1
        thingsToLoad()
        basketValue()
    }
    
    @IBAction func ExpressoButton(_ sender: Any) {
        martiniCount += 1
        basketCount += 5
        undoCount = 2
        thingsToLoad()
        basketValue()
    }
    
    
    @IBAction func SazaracButton(_ sender: Any) {
        sazeracCount += 1
        basketCount += 6
        undoCount = 3
        thingsToLoad()
        basketValue()
    }
    
    @IBAction func WaterButton(_ sender: Any) {
        waterCount += 1
        basketCount += 1
        undoCount = 4
        thingsToLoad()
        basketValue()
    }
    
    @IBAction func undoButton(_ sender: Any) {
        switch(undoCount){
        case 1: basketCount -= 3; stellaCount -= 1; undoCount = 0; offerCount = 0;
        break;
        case 2: basketCount -= 5; martiniCount -= 1; undoCount = 0; offerCount = 0;
        break;
        case 3: basketCount -= 6; sazeracCount -= 1; undoCount = 0; offerCount = 0;
        break
        case 4: basketCount -= 1; waterCount -= 1; undoCount = 0; offerCount = 0;
        default: undoCount = 0
        }
        thingsToLoad()
        basketValue()
    }
    
    @IBAction func resetButton(_ sender: Any) {
        stellaCount = 0;
        martiniCount = 0;
        sazeracCount = 0;
        waterCount = 0;
        basketCount = 0;
        thingsToLoad()
        basketValue()
    }
    
    //MARK: Functions
    
    func thingsToLoad() {
     orderLabel.text = """
        Stella: \(stellaCount)\n
        Espresso: \(martiniCount)\n
        Sazerac: \(sazeracCount)\n
        Water: \(waterCount)
    """
    }
    
    func offers() {
        if(stellaCount == martiniCount && stellaCount == sazeracCount && stellaCount == waterCount) {
            offerCount = stellaCount
        }
        else{
            offerCount = 0
        }
    }


    
    func basketValue(){
        offers()
        switch offerCount {
        case 1:
            basketCount = origOfferNum
            break;
        case 2: basketCount = 19 //20-(basketCount/100)*5
            break;
        case 3: basketCount = 27// 30-(basketCount/100)*10
            break;
        case 4: basketCount = 34 //40-(basketCount/100)*15
            break;
        case 5: basketCount = 40 //50-(basketCount/100)*20
            break;
        case 6: basketCount = 45 //60-(basketCount/100)*25
            break;
        case 7: basketCount = 49 //70-(basketCount/100)*30
            break;
        case 8: basketCount = 52 //80-(basketCount/100)*35
            break;
        case 9: basketCount = 54 //90-(basketCount/100)*40
            break;
        case 10: basketCount = 55 //100-(basketCount/100)*45
            break;
        case 11: basketCount = 55 //110-(basketCount/100)*50
        default:
            print(basketCount)
        }
        
     price.text = "Total Price £\(basketCount)"
    }
    
    // tab bar controller does not reload. So, viewWillAppear instead is preferred.
    
    override func viewWillAppear(_ animated: Bool) {
        thingsToLoad()
        view.self.backgroundColor = UIColor(red: 206/255, green: 207/255, blue: 201/255, alpha: 1)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        thingsToLoad()
        print("Am I working?")
        basketValue()
        view.self.backgroundColor = UIColor(red: 206/255, green: 207/255, blue: 201/255, alpha: 1)
        // Do any additional setup after loading the view, typically from a nib.
    }
    
}
