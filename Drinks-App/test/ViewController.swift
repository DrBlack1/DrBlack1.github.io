//
//  ViewController.swift
//  test
//
//  Created by Codenation13 on 17/06/2019.
//  Copyright © 2019 codenation. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    //MARK : Variables
    
    var numberOne = 10
    var numbertwo = 20
    var numberThree = 0
    var pressed = false
    
   
//    var firstName = "Dylan"
//    var lastName: String = "Wild"
//    var age = 0
//    var realAge = 6
//    var booleanVar : Bool = false
//    var doubleValue = 1
    
    //MARK: Outlets
    
    //binding

    @IBOutlet weak var mainLabel: UILabel!
    
    @IBOutlet weak var secLabel: UILabel!
    
    @IBOutlet weak var titleImage: UIImageView!
    
//    @IBOutlet weak var mainButton: UIButton!
//    
//    @IBOutlet weak var secButton: UIButton!
    
    //MARK: Actions
    
//    @IBAction func mainButtonAction(_ sender: Any) {
//        mainLabel.text = "I have been pressed!"
//        mainLabel.textColor = #colorLiteral(red: 0.4666666687, green: 0.7647058964, blue: 0.2666666806, alpha: 1)
//        if (pressed == false){
//            pressedButton()
//        }
//        else{
//            print("Woo")
//        }
//    }
//
//    @IBAction func secButtonAction(_ sender: Any) {
//        secLabel.text = "ouch"
//        secLabel.textColor = #colorLiteral(red: 0.8078431487, green: 0.02745098062, blue: 0.3333333433, alpha: 1)
//    }
//
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.self.backgroundColor = UIColor(red: 206/255, green: 207/255, blue: 201/255, alpha: 1)
        // Do any additional setup after loading the view, typically from a nib.
    }


}

