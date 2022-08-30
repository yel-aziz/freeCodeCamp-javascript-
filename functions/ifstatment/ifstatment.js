/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ifstatment.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 22:04:01 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 22:05:39 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue == true)
      return "Yes, that was true"
      else
        return "No, that was false"
  }
// tests to check if it's work corectly :)
  console.log(trueOrFalse(true));
  console.log(trueOrFalse(false));