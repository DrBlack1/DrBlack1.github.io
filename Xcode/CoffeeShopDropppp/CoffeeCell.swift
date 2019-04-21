//
//  CoffeeCell.swift
//  CoffeeShopDropppp
//
//  Created by Codenation19 on 13/12/2018.
//  Copyright © 2018 codenation. All rights reserved.
//

import UIKit

class CoffeeCell: UITableViewCell {
    
    
    
    @IBOutlet weak var namelabel: UILabel!
    
    @IBOutlet weak var storeLabel: UILabel!
    
    @IBOutlet weak var ratingImageView: UIImageView!
    
    var coffee: Coffee? {
        didSet {
            guard let coffee = coffee else { return}
            
            namelabel.text = coffee.store
            storeLabel.text = coffee.name
            ratingImageView.image = image(forRating: coffee.rating)
        }
    }
    
    
    func image(forRating rating: Int) ->
        UIImage? {
            let imageName = "\(rating)Stars"
            return UIImage(named: imageName)
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
